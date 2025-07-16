# X-ray-Scan-Search-App
An assessment provided by Orydex involving Django, React, SQLite.
# 🩻 X-ray Scan Search Application

A full-stack web application built with **React (Vite)** on the frontend and **Django REST Framework** on the backend. The app allows you to upload, view, and search/filter X-ray scan records with metadata.

---
## ⚙️ Backend Setup (Django + DRF)

```bash
cd backend

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser

python manage.py runserver
📍 http://localhost:8000/api/scans/
📍 Admin panel: http://localhost:8000/admin/
http://127.0.0.1:8000/?format=api


## 💻 Frontend Setup (React + Vite)
cd frontend
npm install
npm run dev

## 👨‍⚕️ Author
Kumail Ali
Built as a full-stack medical scan management system.
