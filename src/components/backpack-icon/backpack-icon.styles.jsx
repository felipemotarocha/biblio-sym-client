import styled from 'styled-components';
import { ReactComponent as Icon } from '../../utils/backpack.svg';

export const BackPackIconContainer = styled.div`
    display: flex;
    align-items: center;
`

export const BackpackIcon = styled(Icon)`
    width: 24px;
    height: 24px;
`

export const BooksCount = styled.span`
    margin-left: 5px;
`