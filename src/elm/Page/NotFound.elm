module Page.NotFound exposing (view)

import Html exposing (Html, div, h1, img, main_, text)
import Html.Attributes exposing (alt, class, id, src, tabindex)


-- VIEW --


view : Html msg
view =
    main_ [ tabindex -1 ]
        [ h1 [] [ text "Not Found" ]
        ]
