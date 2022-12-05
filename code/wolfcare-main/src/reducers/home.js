/**@module homeReducer */

const initialState = {
	loginApiMessage: '',
	loginApiSuccess: false,
	registerApiMessage: '',
	registerApiSuccess: false,
	createAppointmentApiMessage: '',
	createAppointmentApiSuccess: false,
	updateAppointmentApiMessage: '',
	updateAppointmentApiSuccess: false,
	deleteAppointmentApiMessage: '',
	deleteAppointmentApiSuccess: false,
	getHospitalsApiSuccess: false,
	getHospitalsApiMessage: '',
	hospitals: [],
	userId: '',
	userType: ''
};

/**
 * Reducer for user dashboard component
 * @param {*} state Initial state
 * @param {*} action Action which triggers the reducer execution
 * @returns {Object} Updated state
 */
const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		// Success case
		case 'SUBMITLOGIN': {
			if (action.payload && action.payload.data) {
				const userId = action.payload.data.user.userid;
				const userType = action.payload.data.user.usertype;
				localStorage.setItem('userLogonDetails', JSON.stringify({userId, userType, signInTime: new Date(), signInStatus: true}));
				return {
					...state,
					userId,
					userType,
					loginApiSuccess: true,
					loginApiMessage: action.payload.message
				};
			}
			return {
				...state,
				loginApiSuccess: false,
				loginApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'LOGINFAILURE': {
			return {
				...state,
				loginApiSuccess: false,
				loginApiMessage: action.payload.message
			};
		}
		// Success case
		case 'SUBMITREGISTER': {
			return {
				...state,
				registerApiSuccess: true,
				registerApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'REGISTERFAILURE': {
			return {
				...state,
				registerApiSuccess: false,
				registerApiMessage: action.payload.message
			};
		}
		// Success case
		case 'SUBMITCREATEAPPOINTMENT': {
			return {
				...state,
				createAppointmentApiSuccess: true,
				createAppointmentApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'CREATEAPPOINTMENTFAILURE': {
			return {
				...state,
				createAppointmentApiSuccess: false,
				createAppointmentApiMessage: action.payload.message
			};
		}
		// Success case
		case 'SUBMITUPDATEAPPOINTMENT': {
			return {
				...state,
				updateAppointmentApiSuccess: true,
				updateAppointmentApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'UPDATEAPPOINTMENTFAILURE': {
			return {
				...state,
				updateAppointmentApiSuccess: false,
				updateAppointmentApiMessage: action.payload.message
			};
		}
		// Success case
		case 'SUBMITDELETEAPPOINTMENT': {
			return {
				...state,
				deleteAppointmentApiSuccess: true,
				deleteAppointmentApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'DELETEAPPOINTMENTFAILURE': {
			return {
				...state,
				deleteAppointmentApiSuccess: false,
				deleteAppointmentApiMessage: action.payload.message
			};
		}
		// Success case
		case 'SUBMITGETHOSPITALS': {
			if (action.payload && action.payload.data) {
				return {
					...state,
					hospitals: action.payload.data,
					getHospitalsApiSuccess: true,
					getHospitalsApiMessage: action.payload.message
				};
			}
			return {
				...state,
				getHospitalsApiSuccess: false,
				getHospitalsApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'GETHOSPITALSFAILURE': {
			return {
				...state,
				getHospitalsApiSuccess: false,
				getHospitalsApiMessage: action.payload.message
			};
		}
		// Success case
		case 'SUBMITGETDOCTORS': {
			if (action.payload && action.payload.data) {
				return {
					...state,
					doctors: action.payload.data,
					getDoctorsApiSuccess: true,
					getDoctorsApiMessage: action.payload.message
				};
			}
			return {
				...state,
				getDoctorsApiSuccess: false,
				getDoctorsApiMessage: action.payload.message
			};
		}
		// Failure case
		case 'GETDOCTORSFAILURE': {
			return {
				...state,
				getDoctorsApiSuccess: false,
				getDoctorsApiMessage: action.payload.message
			};
		}
		default: return state;
	}
};
export default homeReducer;
