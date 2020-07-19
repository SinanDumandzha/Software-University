function replaceRepeatingChars(text) {
    let chars = text.split("");
    let result = "";

    for (let i = 0; i < chars.length; i++) {
        if (!result.endsWith(chars[i])) {
            result += chars[i];
        }
    }
    console.log(result);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");