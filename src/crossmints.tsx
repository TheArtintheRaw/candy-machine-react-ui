import React from 'react';
import Stack from '@mui/material/Stack';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';
export default function ContainedButtons() {
    return (
        <Stack direction='row' spacing={2}>
            <CrossmintPayButton
                collectionTitle='alotta sol'
                collectionDescription='alotta sol give aways'
                collectionPhoto='https://ipfs.io/ipfs/QmSuFY1uK4SCAq3mvRFYfY7TrZaJfboWFxVExpXgdCQcwR'
                clientId='494ca877-bec2-45f8-8197-1b66b0a67d94'
                mintConfig={{ type: 'candy-machine' }}
                paymentMethod='ETH'>
                ETH
            </CrossmintPayButton>
            <CrossmintPayButton
                collectionTitle='alotta sol'
                collectionDescription='alotta sol give aways'
                collectionPhoto='https://ipfs.io/ipfs/QmSuFY1uK4SCAq3mvRFYfY7TrZaJfboWFxVExpXgdCQcwR'
                clientId='494ca877-bec2-45f8-8197-1b66b0a67d94'
                mintConfig={{ type: 'candy-machine' }}>
                USD
            </CrossmintPayButton>
        </Stack>
    );
}
