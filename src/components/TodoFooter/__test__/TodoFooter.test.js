import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return <BrowserRouter>
                <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
            </BrowserRouter>
}


describe("TodoFooter", ()=> {
    describe('Functionality 1' , ()=> {
        it('should render the correct amount of incomplete tasks', async () => {
            render(<MockTodoFooter numberOfIncompleteTasks={5}/>);
            const paragraphElement = screen.getByText(/5 tasks left/i); 
            expect(paragraphElement).toBeInTheDocument();
        });
    })
    
      
    describe('Functionality 2' , ()=> {
        it('should render "task" when the number of incomplete tasks is one', async () => {
            render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
            const paragraphElement = screen.getByText(/1 task left/i); 
            expect(paragraphElement).toBeInTheDocument();
        });
    })   
})


// it('should render "task" / truthy when the number of incomplete tasks is one', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByText(/1 task left/i); 
//     expect(paragraphElement).toBeTruthy()
// });

// it('should be visible to the user', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={3}/>);
//     const paragraphElement = screen.getByText(/3 tasks left/i); 
//     expect(paragraphElement).toBeVisible()
// });

// it('should contain p tag element', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={3}/>);
//     const paragraphElement = screen.getByText(/3 tasks left/i); 
//     expect(paragraphElement).toContainHTML('p')
// });

// it('should have task left content', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={3}/>);
//     const paragraphElement = screen.getByTestId('para'); 
//     expect(paragraphElement).not.toBeFalsy()
// });

// it('should have task left contentt', async () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={3}/>);
//     const paragraphElement = screen.getByTestId('para'); 
//     expect(paragraphElement.textContent).toBe('3 tasks left')
//     // expect(paragraphElement.textContent).toBe('1 tasks left')
// });