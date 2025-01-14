import fetch from 'node-fetch';

const E2B_API_BASE_URL = 'https://api.e2b.com';

export async function createE2BContainer() {
  const response = await fetch(`${E2B_API_BASE_URL}/containers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Add any necessary parameters for container creation
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create E2B container');
  }

  return response.json();
}

export async function startE2BContainer(containerId: string) {
  const response = await fetch(`${E2B_API_BASE_URL}/containers/${containerId}/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to start E2B container');
  }

  return response.json();
}

export async function stopE2BContainer(containerId: string) {
  const response = await fetch(`${E2B_API_BASE_URL}/containers/${containerId}/stop`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to stop E2B container');
  }

  return response.json();
}
