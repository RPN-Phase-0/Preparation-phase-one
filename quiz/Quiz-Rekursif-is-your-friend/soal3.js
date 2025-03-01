function consonantCounterRecursive(sentences) {
  if (sentences.length < 1) return 0

  let notCounted = "aiueo 123456789"

  for (const char of notCounted) {
    if (char === sentences[0].toLowerCase())
      return consonantCounterRecursive(sentences.slice(1))
  }

  return 1 + consonantCounterRecursive(sentences.slice(1))
}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3