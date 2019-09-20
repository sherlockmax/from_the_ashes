package main

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	listenPort := "8899"

	r := mux.NewRouter()
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("../dist/")))
	log.Printf("Listen on port: %+v\n", listenPort)
	log.Fatal(http.ListenAndServe(":"+listenPort, r))
}
