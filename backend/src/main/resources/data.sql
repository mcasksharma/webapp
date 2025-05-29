-- Initial admin user (password: admin123)
INSERT INTO users (username, password, email, full_name, role)
VALUES ('admin', '$2a$10$9TeBFudS7HsgCa4sSPL.pe6w.0HNs1HgihZRN5pvqzB5dPNrxIAPC', 'admin@example.com', 'Admin User', 'ROLE_ADMIN');

-- Regular user (password: user123)
INSERT INTO users (username, password, email, full_name, role)
VALUES ('user', '$2a$10$Ot.09ml5TSQy1lPKU0Lv/eCpOQjgYnp1xWw5FUTK9AwMvAxQKQ7S2', 'user@example.com', 'Regular User', 'ROLE_USER');
