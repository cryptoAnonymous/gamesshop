package main

import (
	controller "GamesShop/controller"
	"fmt"
	"github.com/gorilla/mux"
	"net/http"
)

func main() {

	router := mux.NewRouter()
	controllerObj := controller.Controller{}
	controllerObj.Initialize(router)
	fmt.Println("Server is listening...")
	http.ListenAndServe("localhost:8080", router)
}
