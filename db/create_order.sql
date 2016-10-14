INSERT INTO orders (model_id, rim_id, color_id, roof_id, seat_id, liner_id, decor_id) values ($1, $2, $3, $4, $5, $6, $7) RETURNING order_id;
