import { Ticket, TicketListResponse, TicketResponse } from "@/types/ticket";
import { Api } from "./api";
import { ApiResponse } from "@/types/api";

async function createOne(eventId: number): Promise<TicketResponse> {
  return Api.post("/tickets", { eventId });
}

async function getOne(
  id: number
): Promise<ApiResponse<{ ticket: Ticket; qrcode: string }>> {
  return Api.get(`/tickets/${id}`);
}

async function getAll(): Promise<TicketListResponse> {
  return Api.get("/tickets");
}

async function validateOne(ticketId: number, ownerId: number): Promise<TicketResponse> {
  return Api.post(`/tickets/validate`, { ticketId, ownerId });
}

const ticketService = {
  createOne,
  getOne,
  getAll,
  validateOne,
};

export { ticketService };
