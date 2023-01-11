

function calcN(b0) {
  const DLU = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8',
    '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-',
    '_'
  ];
  const ULD = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a',
    'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1',
    '2', '3', '4', '5', '6', '7', '8', '9', '-',
    '_'
  ];

  function ROTR(e, d) {
    for (; d--; ) {
      e.unshift(e.pop())
    }
  }
  function REV(d) {
    d.reverse();
  }
  function XD(d, e, f) {
    let h = e.length;
    d.forEach(function(l, m, n) {
      this.push(n[m] = e[(e.indexOf(l) - e.indexOf(this[m]) + m + h--) % e.length])
    }, f.split(""))
  }
  function SWAP(d, _, e) {
    d.splice(0, 1, d.splice(e, 1, d[0])[0])
  }
  function TAKE(d, e) {
    d.splice(e, 1)
  }
  const b = b0.split("");
  XD(b, ULD, "cE_T-Q")
  XD(b, ULD, "while")
  ROTR(b, 1)
  SWAP(b, 0, 9)
  REV(b)
  SWAP(b, 0, 7)
  REV(b)
  XD(b, DLU, "HMD8QZy")
  ROTR(b, 13)
  TAKE(b, 8)
  SWAP(b, 0, 2)
  REV(b)
  REV(b)
  TAKE(b, 14)
  SWAP(b, 0, 8)
  SWAP(b, 0, 3)
  SWAP(b, 0, 5)
  REV(b)
  return b.join("");
}

console.log(calcN("3Y7QPlw7lIu7imgH"))