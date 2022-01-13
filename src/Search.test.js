import { render, fireEvent, debug, screen } from '@testing-library/react';
import Search from './Search';

describe('Search Component', () => {
    test('renders an input, a button and a list', () => {
       render(<Search />);

        screen.getByRole('textbox');
        screen.getByRole('button');
        screen.getByRole('list');
    })

    test('input should allow for writing', () => {
        render(<Search />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, {target: {value: "luke skywalker"}});

        expect(input.value).toMatch('luke skywalker');
    })

    test('search button should show input writing on screen after pressing the button', () =>{
        render(<Search resultList={['luke skywalder', 'R2-D2', 'Obi Wan Kenobi']}/>);
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');

        fireEvent.change(input, { target: {value: 'R2-D2'}});
        fireEvent.click(button);

        screen.getByText('R2-D2');
    })
})




