function func ({color='black', width, height}) {
    document.write(color + ' ' + width + ' ' + height);
}

func({ color: 'red', width: 400, height: 500 })