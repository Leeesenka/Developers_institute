export const insert = (data) => {
  console.log("insert action", data);
  return {
    type: 'INSERT',
    payload: data,
  }
}
export const update = (data) => {
    return {  
    type: 'UPDATE',
    payload: data,   
  }
}
export const delete1 = (id) => {
    return {    
    type: 'DELETE',
    payload: id,
  }
}
export const updateIndex = (index) => {
      return {  
    type: 'UPDATE-INDEX',
    payload: index
    }
}













