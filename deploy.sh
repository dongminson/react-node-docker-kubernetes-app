docker build -t dongminson/react-node-docker-kubernetes-app-frontend:latest -t dongminson/react-node-docker-kubernetes-app-frontend:$SHA -f .frontend/Dockerfile ./frontend
docker build -t dongminson/react-node-docker-kubernetes-app-backend:latest -t dongminson/react-node-docker-kubernetes-app-backend:$SHA -f .backend/Dockerfile ./backend
docker push dongminson/react-node-docker-kubernetes-app-frontend:latest
docker push dongminson/react-node-docker-kubernetes-app-backend:latest
docker push dongminson/react-node-docker-kubernetes-app-frontend:$SHA
docker push dongminson/react-node-docker-kubernetes-app-backend:$SHA
kubectl apply -f k8s
kubectl set image deployments/client-deployment client=dongminson/react-node-docker-kubernetes-app-frontend:$SHA
kubectl set image deployments/server-deployment server=dongminson/react-node-docker-kubernetes-app-backend:$SHA