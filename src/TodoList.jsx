import { useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the Data Grid
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';



function TodoList() {
    const [todo, setTodo] = useState({ description: '', date: null, priority: '', floatingFilter: true });
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
      };

      const handleDateChange = (newDate) => {
        setTodo({ ...todo, date: newDate });
    };

      const [colDefs, setcolDefs] = useState([
        {field: "description", filter: true, floatingFilter: true},
        {field: "priority", filter: true, floatingFilter: true,
          cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}
        },
        {field: "date", filter: true, floatingFilter: true}
      ]);
      

    const addTodo = () => {
      if (todo.description.trim() === "" || !todo.date || !dayjs(todo.date).isValid()) {
        alert("Fill all!");
        return;
      }

      setTodos([...todos, { ...todo, date: todo.date.format('YYYY-MM-DD') }]);

        setTodo({ description: '', date: null, priority: '' });
      };
    
      const handleDelete = () => {
        if (todos.length > 0) {
            setTodos(todos.slice(0, todos.length - 1));
        } else {
            alert("No todos to delete!");
        }
    };

    return(
      <>
        <h3>Simple Todolist</h3>
        <Stack direction="row" spacing={2}>
        <TextField name="description" placeholder="Description" onChange={handleChange} value={todo.description} />
        <TextField name="priority" placeholder="Priority" onChange={handleChange} value={todo.priority} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select date"
                        value={todo.date}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
        <Button variant = "contained" onClick={addTodo}>Add</Button>
        <Button variant = "contained" color = "error" endIcon = {<DeleteIcon/>} onClick={handleDelete}>Delete</Button>
        </Stack>
        <div className="ag-theme-material" style={{height: 500, width: "110%"}}>
          <AgGridReact rowData={todos} columnDefs={colDefs}/>
        </div>
      </>
    );
  }
  
  export default TodoList;