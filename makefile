build:
	docker compose up --build $(c)

up:
	docker compose up -d $(c)

start:
	docker compose start $(c)

down:
	docker compose down down $(c)

destroy:
	docker compose down -v  $(c)

stop:
	docker compose stop $(c)

restart:
	docker compose stop  $(c)
	docker compose up -d  $(c)

logs:
	docker compose logs --tail=100 -f  $(c)