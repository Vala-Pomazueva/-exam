# Проєкт: Event-Driven Architecture (ActiveMQ)

Цей проєкт демонструє обмін повідомленнями в реальному часі між браузерними клієнтами та Postman через ActiveMQ.

## Запуск
1. Зайти в папку `exam`.
2. Виконати `docker-compose up -d`.
3. Відкрити в браузері:
   - Сервіс 1: `http://localhost:8080/web1/`
   - Сервіс 2: `http://localhost:8080/web2/`

## Протоколи
- **Web:** MQTT over WebSockets (61614)
- **Postman:** MQTT (1883)