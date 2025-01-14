import { json } from '@remix-run/cloudflare';
import { type ActionFunctionArgs, type LoaderFunctionArgs } from '@remix-run/cloudflare';
import { createE2BContainer, startE2BContainer, stopE2BContainer } from '~/lib/e2b-container';

export async function action({ request }: ActionFunctionArgs) {
  const { actionType, containerId } = await request.json();

  try {
    let result;
    switch (actionType) {
      case 'create':
        result = await createE2BContainer();
        break;
      case 'start':
        result = await startE2BContainer(containerId);
        break;
      case 'stop':
        result = await stopE2BContainer(containerId);
        break;
      default:
        return json({ error: 'Invalid action type' }, { status: 400 });
    }

    return json(result);
  } catch (error) {
    return json({ error: error.message }, { status: 500 });
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  return json({ message: 'E2B Container API' });
}
