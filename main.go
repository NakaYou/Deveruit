package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
)

type Code struct {
	Code string `json:"code"`
}

type GitHubInfo struct {
	Login  string `json:"login"`
	Avatar string `json:"avatar_url"`
}

func main() {
	http.HandleFunc("/", githubAuth)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}

func githubAuth(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
	length := r.ContentLength
	body := make([]byte, length)
	r.Body.Read(body)
	if len(body) == 0 {
		return
	}
	var code Code
	json.Unmarshal(body, &code)
	fmt.Println(code)
	if code.Code == "" {
		return
	}
	getAccessToken(w, code.Code)

}

func getAccessToken(w http.ResponseWriter, code string) {
	url := "https://github.com/login/oauth/access_token"
	var jsonStr = []byte(`{"client_id":"224561ede850fd53d6a2",
	"client_secret":"1860f84d2cb14a589fce2ef34150c12c791e9dce",
	"code":"` + code + `"}`)
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStr))
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	body, _ := ioutil.ReadAll(resp.Body)
	str := string(body)
	fmt.Println("response Body:", str)
	splited := strings.Split(str, "=")
	fmt.Println(splited)
	ss := []rune(splited[1])
	token := string(ss[:len(ss)-6])
	fmt.Println(token)

	info := getGitHubInfo(token)

	output, err := json.MarshalIndent(&info, "", "\t\t")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(output)
}

func getGitHubInfo(token string) *GitHubInfo {
	url := "https://api.github.com/user"
	var bearer = "Bearer " + token

	req, err := http.NewRequest("GET", url, nil)

	req.Header.Add("Authorization", bearer)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	body, _ := ioutil.ReadAll(resp.Body)
	fmt.Println("response Body:", string(body))
	var githubInfo GitHubInfo
	json.Unmarshal(body, &githubInfo)
	fmt.Println(githubInfo)
	return &githubInfo
}
