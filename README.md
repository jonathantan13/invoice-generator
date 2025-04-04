## How to install and run locally

Prerequisites: Ensure you have git, node, and pip (package installer for Python) installed.

### Step 1: Clone repository

Using your terminal, navigate to the repository where you wish to clone the project. After that, clone the repository with the following command:

```bash
git clone https://github.com/jonathantan13/invoice-generator.git
```

### Step 2: Installing node dependencies

Once you're in the root of the directory, you'll see `package.json`, `package-lock.json` alongside 2 folders (`frontend` and `backend`)

Install the dependency in the root directory

```bash
npm install
```

After that, install the dependencies for the frontend

```bash
cd frontend
npm install
```

### Step 3. Setting up a virtual environment (Optional)

Assuming you're still in the `frontend` directory, you'll have to navigate your way to the backend directory. To do that, type the following command in your terminal:

```bash
cd ../backend
```

Once in, you can create a virtual environment with the `venv` package that comes with Python.

```bash
python -m venv .venv
```

Inside the Scripts folder, there should be an `activate` executable. Once executed, you should see (venv), signaling that you're in a virtual environment. This is where you'll be installing FastAPI.

### Step 4. Installing FastAPI

If you skipped step 3, you'll have to navigate your way to the backend directory. (See first line of step 3)

To install FastAPI, run the following command in your terminal:

```bash
pip install "fastapi[standard]"
```
