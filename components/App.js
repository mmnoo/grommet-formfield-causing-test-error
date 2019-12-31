import React from 'react'
import {Form, FormField, Button, Box} from 'grommet'
function App() {
    // works in tests
    // return(<Box>FOO</Box>)

    // error in tests
    return (
    <Form>
        <FormField name="username" label="User Name" />
    </Form>)

  }

export default App