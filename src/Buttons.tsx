import * as React from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const CTAButton = styled(Button)`
    width: 200px;
    height: 60px;
    margin-top: 10px;
    margin-bottom: 5px;
    background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
    color: white;
    font-size: 16px;
    font-weight: 900;
`;

export default function ContainedButtons() {
    return (
        <CTAButton variant='contained' href='https://alottasol.com'>
            Home
        </CTAButton>
    );
}
