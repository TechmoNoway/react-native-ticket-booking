import { EventListResponse, EventResponse } from "@/types/event";
import { Api } from "./api";

async function createOne(
  name: string,
  location: string,
  date: string
): Promise<EventResponse> {
  return Api.post("/events", { name, location, date });
}

async function getOne(id: number): Promise<EventResponse> {
  return Api.get(`/events/${id}`);
}

async function getAll(): Promise<EventListResponse> {
  return Api.get("/events");
}

async function updateOne(
  id: number,
  name: string,
  location: string,
  date: string
): Promise<EventResponse> {
  return Api.put(`/events/${id}`, { name, location, date });
}

async function deleteOne(id: number): Promise<null> {
  return Api.delete(`/events/${id}`);
}

const eventService = {
  createOne,
  getOne,
  getAll,
  updateOne,
  deleteOne,
};

export { eventService };
