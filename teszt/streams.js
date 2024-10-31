const readable = getReadableStreamSomehow();
readable.on('data', function(chunk) {
    console.log('got %d bytes of data', chunk.length);
});
readable.on('end', function() {
    console.log('there will be no more data.');
});
