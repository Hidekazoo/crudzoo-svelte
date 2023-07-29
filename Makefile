test-setup:
	docker run -it --rm \
  -p 8080:8080 \
  wiremock/wiremock:2.35.0
test:
	API_ENDPOINT=http://localhost:8080 npm test
test-watch:
	API_ENDPOINT=http://localhost:8080 npm run test:watch