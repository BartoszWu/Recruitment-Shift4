const formatValue = (inputValue: string) => {
  // Remove all non-numeric characters except for decimal point
  const numericValue = inputValue.replace(/[^0-9.]/g, '')

  // Split by decimal point to handle multiple decimal points
  const parts = numericValue.split('.')

  // Allow only two decimal places
  if (parts.length > 2) {
    parts[1] = parts[1].slice(0, 2)
  }

  // Combine integer and decimal parts
  const combinedValue = parts.join('.')

  // Parse to float and format as currency
  const floatValue = parseFloat(combinedValue)

  if (!isNaN(floatValue)) {
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(floatValue)

    // Remove the currency symbol for display
    return formattedValue.replace('$', '')
  } else {
    return
  }
}