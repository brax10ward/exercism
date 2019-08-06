exports.translate = rna => {
  const translation = [];

  if (!rna) {
    return translation;
  }

  const rnaChunks = rna.match(/.{1,3}/g);

  rnaChunks.map(codon => {
    const codonName = codonNames[codon];

    if (!codonName) {
      throw new Error("Invalid codon");
    }
    translation.push(codonName);
  });

  const stopIndex = translation.findIndex(codon => codon === "STOP");

  if (stopIndex !== -1) {
    translation.splice(stopIndex);
  }

  return translation;
};

const codonNames = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP"
};
