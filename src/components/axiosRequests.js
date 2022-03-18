import httpClient from "./axios";

export async function getTasks() {
  return await httpClient.get(`/tasks`).then((res) => {
    return res.data;
  });
}

export async function getCollection() {
  return await httpClient.get(`/collection/today`).then((res) => {
    return res.data;
  });
}

export async function getLists() {
  return await httpClient.get(`/lists`).then((res) => {
    return res.data;
  });
}

export async function getData(data) {
  let url = `/lists/${data.list_id}/tasks/${data.id}`;
  return await httpClient.patch(url, { done: data.done }).then((res) => {
    return res.data;
  });
}

export async function deletedTask(data) {
  let url = `/lists/${data.list_id}/tasks/${data.id}`;
  console.log(url);
  return await httpClient.delete(url).then(() => {
    return true;
  });
}

export async function postTask(newTask) {
  let url = `/lists/${newTask.list_id}/tasks`;
  return await httpClient.post(url, newTask).then((res) => {
    return res.data;
  });
}
