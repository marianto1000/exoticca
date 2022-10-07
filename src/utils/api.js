// export default async function(args) {
//     const res = await fetch(args);
//     return await res.json();
//   }

  export default () => (
    fetch(`https://api-es.exoticca.com/api/home`)
    .then(res => res.json())
  );
