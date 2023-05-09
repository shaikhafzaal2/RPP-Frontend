import { createAction } from "@reduxjs/toolkit";
import { ActionTypes } from "literals";
import { actionPayload } from "modules/helpers";



export const getStudentsRequest = createAction(ActionTypes.GET_STUDENT_REQUEST,(payload: any) => actionPayload(payload),);
export const getStudentsRequestSuccess = createAction(ActionTypes.GET_STUDENT_SUCCESS,  (payload: any) => actionPayload(payload),);
export const getStudentsRequestFailure = createAction(ActionTypes.GET_STUDENT_FAILURE,  (payload: any) => actionPayload(payload),);
export const AdminRemoveStudent = createAction(ActionTypes.ADMIN_REMOVE_STUDENT,  (payload: any) => actionPayload(payload));