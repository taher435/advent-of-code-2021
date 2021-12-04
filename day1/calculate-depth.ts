export const calculateIncreaseDepthCount = (input: Array<number>) => {
  let increasedDepthCount = 0
  for (let i = 1; i < input.length; i++) {
    increasedDepthCount += input[i] > input[i - 1] ? 1 : 0
  }
  return increasedDepthCount
}

export const calculateSlidingWindowIncreaseDepthCount = (input: Array<number>) => {
  let previousWindowSum
  let increasedDepthCount = 0
  const windowSize = 3
  for (let i = 0; i <= input.length - windowSize; i++) {
    const window = input.slice(i, i + windowSize)
    const currentWindowSum = window.reduce((sum: number, n: number) => sum + n, 0)

    increasedDepthCount += !!previousWindowSum && currentWindowSum > previousWindowSum ? 1 : 0
    previousWindowSum = currentWindowSum
  }
  return increasedDepthCount
}
