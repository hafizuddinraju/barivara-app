const BASE_URL = "http://localhost:3000/"
// all user
export const getBookings = async () => {
    const response = await fetch(`${BASE_URL}api/booking`)
    const json = await response.json()

    return json;
}


// single user


// posting a new user
export async function addBooking(formData){
    console.log(formData);
    try{
        const Options = {
            method : 'POST',
            headers : { 'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`${BASE_URL}api/booking`, Options)
        const json = await response.json()

        return json;
    }catch(error){
        return error;
    }
}


// Update a new user



// Delete a new user
export async function deleteBooking(bookingId){
    const Options = {
        method : 'DELETE',
        headers : { 'Content-Type': "application/json"},
    }

    const response = await fetch(`${BASE_URL}api/booking/${bookingId}`, Options)
    const json = await response.json()
    return json;
}