test-setup:
	docker run -it --rm \
  -p 8080:8080 \
  --name wiremock \
  wiremock/wiremock:2.35.0
test:
	API_ENDPOINT=http://localhost:8080 npm test