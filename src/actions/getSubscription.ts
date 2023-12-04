export async function getSubscription() {
  const [offer, subscription] = await Promise.all([
    fetch("https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer"),
    fetch(
      "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription"
    ),
  ]);

  if (!offer.ok || !subscription.ok) {
    throw new Error("Failed to fetch data");
  }

  const offerData = await offer.json()
  const subscriptionData = await subscription.json()
  
  return {...subscriptionData, offer: offerData[0]};
}
