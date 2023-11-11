# StudySense

Must do this once on your device to set up the virtual enviornment:
```
cd server
python -m venv venv
source venv/Scripts/activate  # Enter venv **on macOS/Linux**
.\venv\Scripts\activate       # Enter venv **on Windows**
pip install -r requirements.txt
```

To start the backend server:
```
cd server
source venv/Scripts/activate  # Enter venv on macOS/Linux
.\venv\Scripts\activate       # Enter venv on Windows
python server.py              # To run routes
```

To start front end, in a different terminal:
```
cd client
npm install
npm start
```