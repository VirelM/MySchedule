import config from '../config';
import TokenService from './token-service';

const ScheduleApiService = {
  getSchedules() {
    return fetch(`${config.API_ENDPOINT}/schedules/all`, {
      headers: {
        'authorization':`bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getSchedule(scheduleid) {
    return fetch(`${config.API_ENDPOINT}/schedules/${scheduleid}`, {
      headers: {
        'authorization':`bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getSchedulesforUser() {
    return fetch(`${config.API_ENDPOINT}/schedules/`, {
      headers: {
        'authorization':`bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postSchedule(userid, startSun, endSun, startMon, endMon, startTues, endTues, startWed, endWed, startThurs, endThurs, startFri, endFri, startSat, endSat) {
    return fetch(`${config.API_ENDPOINT}/schedules`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization':`bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        userid,
        startSun,
        endSun,
        startMon,
        endMon,
        startTues,
        endTues,
        startWed,
        endWed,
        startThurs,
        endThurs,
        startFri,
        endFri,
        startSat,
        endSat
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postNewUser(userid,password,full_name,store){
    return fetch(`${config.API_ENDPOINT}/users`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        userid,password,full_name,store
      })
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      
  },
  getAllUsers(){
    return fetch(`${config.API_ENDPOINT}/users`,{
      headers: {
        'authorization':`bearer ${TokenService.getAuthToken()}`,
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  // getSchedulesforUser() {
  //   return fetch(`${config.API_ENDPOINT}/schedules/`, {
  //     headers: {
  //       'authorization':`bearer ${TokenService.getAuthToken()}`,
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
}

export default ScheduleApiService