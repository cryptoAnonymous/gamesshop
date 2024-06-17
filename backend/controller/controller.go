package controller

import (
	"GamesShop/service"
	"GamesShop/service/dataaccess"
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
)

type Controller struct {
}

func (controller Controller) Initialize(router *mux.Router) {
	router.HandleFunc("/users/registration", controller.Registration).Methods(http.MethodPost)
	router.HandleFunc("/users/{username}", controller.GetUserInfo).Methods(http.MethodGet)
}

func (controller Controller) Registration(w http.ResponseWriter, r *http.Request) {
	var user dataaccess.User

	// Try to decode the request body into the struct. If there is an error,
	// respond to the client with the error message and a 400 status code.
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	service.Users[user.Login] = user
	w.WriteHeader(http.StatusCreated)
}

func (controller Controller) GetUserInfo(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	user := service.Users[vars["username"]]
	if user.Login == "" {
		w.WriteHeader(http.StatusNotFound)
		return
	}
	userBytes, err := json.Marshal(user)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(userBytes)
	w.WriteHeader(http.StatusOK)
}
