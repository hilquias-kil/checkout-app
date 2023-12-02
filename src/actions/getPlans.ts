export async function getPlans() {
  const res = await fetch('https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}