angular.module('inkanote.directives', [])
  .directive('textarea', function() {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {

        // for each line of text
        //   if line.length > cols
        //     then insert \n at lastIndexOf space before cols
        function wrapLines(text, cols) {
          var oldLines = text.split("\n"),
              newLines = [],
              line;
          while (typeof (line = oldLines.shift()) !== "undefined") {
            if (line.length > cols) {
              var lastSpaceIdx = line.lastIndexOf(' ', cols);
              if (lastSpaceIdx !== -1) {
                newLines.push(line.slice(0, lastSpaceIdx));
                oldLines.unshift(line.slice(lastSpaceIdx + 1));
              } else {
                //newLines.push(line.slice(0, cols));
                //oldLines.unshift(line.slice(cols));
                newLines.push(line);
              }
            } else {
              newLines.push(line);
            }
          }
          return newLines.join('\n');
        }

        element.bind('keyup', function(e) {
          var wrappedText = wrapLines(element.val(), attrs.cols);
          if (wrappedText != element.val()) {
            var selS = element[0].selectionStart;
            var selE = element[0].selectionEnd;
            element.val(wrappedText);
            element[0].setSelectionRange(selS, selE);
          }
          // validate
          if (element.val().split('\n').length > attrs.rows) {
            element.addClass("error");
            e.stopPropagation();
          } else {
            element.removeClass("error");
          }
        });
      }
    };
  });
