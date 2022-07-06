import React from 'react';
import Stack from '@mui/material/Stack';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';
export default function ContainedButtons() {
    return (
        <Stack direction='row' spacing={2}>
            <CrossmintPayButton
                collectionTitle='AlottaSolGiveaways'
                collectionDescription='AlottaSolGiveaways'
                collectionPhoto='https://ipfs.io/ipfs/QmavDFXphG8smFhCmCGP6rdmsaZ7iApMDH7siKNCqZeNU1?filename=0.png'
                clientId='ae4210a1-d0b0-44ab-8792-0be421f90743'
                mintConfig={{ type: 'candy-machine' }}
                paymentMethod='ETH'>
                ETH
            </CrossmintPayButton>
            <CrossmintPayButton
                collectionTitle='AlottaSolGiveaways'
                collectionDescription='AlottaSolGiveaways'
                collectionPhoto='https://ipfs.io/ipfs/QmavDFXphG8smFhCmCGP6rdmsaZ7iApMDH7siKNCqZeNU1?filename=0.png'
                clientId='ae4210a1-d0b0-44ab-8792-0be421f90743'
                mintConfig={{ type: 'candy-machine' }}>
                USD
            </CrossmintPayButton>
        </Stack>
    );
}
