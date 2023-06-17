.DEFAULT_GOAL := build

fmt:
	go fmt ./...
.PHONY:fmt

lint: fmt
	golint ./...
.PHONY:lint

vet: lint
	go vet ./...
.PHONY:vet

build: vet
	go build hello.go
.PHONY:build