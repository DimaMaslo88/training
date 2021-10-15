let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.lenght - 1) / 2)] = 'Классика';
alert(styles.shift());
styles.unshift("Рэп", "Рэгги");