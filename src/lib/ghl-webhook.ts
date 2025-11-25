interface GHLWebhookData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  tags?: string[];
  customFields?: Array<{ key: string; value: string }>;
  [key: string]: any;
}

interface WebhookSubmission {
  webhookUrl: string;
  data: GHLWebhookData;
}

export async function submitToGHLWebhook({ 
  webhookUrl, 
  data 
}: WebhookSubmission): Promise<any> {
  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Webhook failed (${response.status}): ${errorText}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType?.includes('application/json')) {
    return response.json();
  }
  return response.text();
}
