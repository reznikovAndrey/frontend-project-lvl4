start-frontend:
	make -C frontend start

start-backend:
	npx start-server -p 5001

start:
	make start-backend & make start-frontend

deploy:
	railway up

install:
	npm ci
	make -C frontend ci
