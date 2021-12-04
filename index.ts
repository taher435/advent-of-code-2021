const run = (day: string) => {
  import(`./${day}`).then((dayRunner) => {
    dayRunner.run(dayRunner.input)
  })
}

run(process.argv[2])
