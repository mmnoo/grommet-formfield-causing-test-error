import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'


import App from './App'

test('test' ,() => {
  const { getByText, getByRole } = render(<App />)
})
