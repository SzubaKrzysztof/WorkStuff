import _ from "lodash";

export default class ProductPage {
    attach() {
        if (window.Konesso.settings.PageType != 'search') {
            return;
        }

        this.GenerateSearchCategories();
        this.GenerateMobileModals();
        this.ShowMoreCategories();
        this.ChangeProductView();
        this.ShowMoreFilters();
        this.CheckboxToRadio();
        this.CheckboxToTop();
        this.FiltersLogic();
        this.SubFilterButtons();
        this.AdditionalInfoButton();
        this.ClearFilters();
        this.ShowFilterResults();
        this.PriceRangeSlider();
    }

    PriceRangeSlider() {
        const rangeInput = document.querySelectorAll(".range-input input"),
                priceInput = document.querySelectorAll(".price-input input"),
                range = $(".slider .progress");
        let priceGap = 10;

            priceInput.forEach(input =>{
                input.addEventListener("input", e =>{
                    let minPrice;
                    let maxPrice;

                    if ($(window).width() <= 768) {
                        minPrice = parseInt(priceInput[2].value),
                        maxPrice = parseInt(priceInput[3].value);
                        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[3].max) {
                            if (e.target.className === "input-min") {
                                rangeInput[2].value = minPrice;
                                range[1].style.left = ((minPrice / rangeInput[2].max) * 100) + "%";
                            } else {
                                rangeInput[3].value = maxPrice;
                                range[1].style.right = 100 - (maxPrice / rangeInput[3].max) * 100 + "%";
                            }
                        }
                    } else {
                        minPrice = parseInt(priceInput[0].value),
                        maxPrice = parseInt(priceInput[1].value);
                        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
                            if (e.target.className === "input-min") {
                                rangeInput[0].value = minPrice;
                                range[0].style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                            } else {
                                rangeInput[1].value = maxPrice;
                                range[0].style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                            }
                        }
                    }
                });
            });

            rangeInput.forEach(input =>{
                input.addEventListener("input", e =>{
                    let minVal;
                    let maxVal;
                    if ($(window).width() <= 768) {
                        minVal = parseInt(rangeInput[2].value),
                        maxVal = parseInt(rangeInput[3].value);
                    } else {
                        minVal = parseInt(rangeInput[0].value),
                        maxVal = parseInt(rangeInput[1].value);
                    }   
                    if ((maxVal - minVal) < priceGap) {
                        if (e.target.className === "range-min") {
                            rangeInput[0].value = maxVal - priceGap
                        } else {
                            rangeInput[1].value = minVal + priceGap;
                        }
                    } else {
                        if ($(window).width() <= 768) {
                            priceInput[2].value = minVal;
                            priceInput[3].value = maxVal;

                            range[1].style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                            range[1].style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                        } else {
                            priceInput[0].value = minVal;
                            priceInput[1].value = maxVal;

                            range[0].style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                            range[0].style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                        }   
                    }
                });
            });
    }
    
    ShowFilterResults() {
        $(document).on('click', '.show-results', () => {
            $('.modal .modal__close').click();
        });
    }

    ShowMoreCategories() {
        $(document).on('click', '.search-panel .block .show', (e) => {
            let target = $(e.currentTarget);
            if (target.hasClass('active')) {
                target.removeClass('active');
                target.text('Pokaż więcej');
                target.parent().children().each((i, el) => {
                    if ($(el).hasClass('cat-hidden')) {
                        $(el).addClass('hidden');
                    }
                });
            } else {
                target.addClass('active');
                target.text('Schowaj');
                target.parent().children().removeClass('hidden');
            }
        })
    }

    ChangeProductView() {
        $(document).on('click', '.panel-products .view i', (e) => {
            let target = $(e.currentTarget);
            if (target.hasClass('block-view')) {
                $('.search-panel .panel-products .products').addClass('block-view');
            } else if (target.hasClass('one-view')) {
                $('.search-panel .panel-products .products').removeClass('block-view');
            }
        })
    }

    ShowMoreFilters() {
        $('.filter-panel .accesibility-filter ul').each((i, el) => {
            let child = Array.from(el.children);
            child = child.map((em) => {
                if ($(em).hasClass('filter-hidden')) {
                    return true;
                }
                else {
                    return false;
                }
            })
            if (child.some(es => es)) {
                $(Array.from(el.children)[0]).append(`<div class="more-wrapper"><span>Pokaż więcej</span><i class="zwicon-chevron-down"></i></div>`);
                $(Array.from(el.children)[0]).css('cursor', 'pointer')
            } else {
                return;
            }
        })

        $(document).on('click', '#filter-form .name', (e) => {
            let target = $(e.currentTarget);
            if (target.hasClass('active')) {
                target.removeClass('active');
                target.find('i').removeClass('zwicon-chevron-up').addClass('zwicon-chevron-down');
                target.parent().children().each((i, el) => {
                    if ($(el).hasClass('filter-hidden')) {
                        $(el).addClass('hidden');
                    }
                });
            } else {
                target.addClass('active');
                target.find('i').removeClass('zwicon-chevron-down').addClass('zwicon-chevron-up');
                target.parent().children().removeClass('hidden');
            }
        })
    }

    CheckboxToRadio() {
        $(document).on('click', '.radiocheck', function(e) {
            $('.radiocheck input[type=checkbox]').not(this).prop('checked', false);

            let input = $(e.currentTarget).find('input');
            if (input.prop('checked')) {
                input.prop('checked', false);
            } else {
                input.prop('checked', true);
            }
        });
    }
    
    CheckboxToTop() {
        $(document).on("click", '.modal__window .accesibility-filter .filtertrigger', function() {
            let parent = $(this).parent();
            if($(this).find('input').is(":checked")) {
                $(parent).slideUp(200, function() {
                    $(parent).appendTo($(parent).parent());
                    $(parent).slideDown(200);
                });
            } else {
                $(parent).slideUp(200, function() {
                    $(parent).prependTo($(parent).parent());
                $(parent).slideDown(200);
                });
            }
        });
    }

    FiltersLogic() {
        let range = [];

        function FilterHref() {
            window.Konesso.filter.href = [];
            window.Konesso.filter.filters.forEach((el, i) => {
                if (i == 0) {
                    window.Konesso.filter.href.push(`?${el.parent}=${el.input.replace(/\s+/g, '_').toLowerCase()}`);
                } else {
                    window.Konesso.filter.href.push(`&${el.parent}=${el.input.replace(/\s+/g, '_').toLowerCase()}`);
                }
            });
            window.history.pushState("", "", window.Konesso.filter.href.length == 0 ? '?' : window.Konesso.filter.href.join(""));
        }

        function AddFilterBlock() {
            let html = '';
            window.Konesso.filter.filters.map((el, i) => {
                if (el.parent.includes('cena_max')) {
                    html += `<span class="filter" data-filter="cena_max=${el.input}">${el.parent.includes('max') ? 'Cena do:' : 'Cena od:'}&nbsp;<b>${el.input}</b> zł<i class="zwicon-close"></i></span>`
                } else if (el.parent.includes('cena_min')) {
                    html += `<span class="filter" data-filter="cena_min=${el.input}">${el.parent.includes('max') ? 'Cena do:' : 'Cena od:'}&nbsp;<b>${el.input}</b> zł<i class="zwicon-close"></i></span>`
                } else {
                    html += `<span class="filter" data-filter="${el.input}">${el.htmlParent}:&nbsp;<b>${el.input}</b> <i class="zwicon-close"></i></span>`;
                }
            });
            $('.search-panel .active-filters').html(html);
        }
        
        $(document).on('click', '.filter-panel .accesibility-filter .checkbox, .modal__window .accesibility-filter .filtertrigger', (e) => {
            e.preventDefault();
            
            let input = $(e.currentTarget).find('input');
            let parent = $(e.currentTarget).parent().parent().first().find('.name');
            let currentData = {parent: parent.data('filtername').replace(/\s+/g, '_').toLowerCase(), input: input.data('filter').replace(/\s+/g, '_').toLowerCase(), htmlParent: parent.find('b').prop('outerText')};
            if (input.prop('checked')) {
                input.prop('checked', false);
                window.Konesso.filter.filters = window.Konesso.filter.filters.filter(el => el.input != currentData.input);

                Object.keys(window.Konesso.filter.postBody).forEach(el => {
                    if (el.includes(parent.data('filtername'))) {
                        window.Konesso.filter.postBody[el] = window.Konesso.filter.postBody[el].filter(em => em != currentData.input);
                    }
                })
            } else {
                input.prop('checked', true);
                window.Konesso.filter.filters.push(currentData);

                Object.keys(window.Konesso.filter.postBody).forEach(el => {
                    if (el.includes(parent.data('filtername'))) {
                        window.Konesso.filter.postBody[el].push(input.data('filter').replace(/\s+/g, '_').toLowerCase());
                    }
                })
            }

            FilterHref();
            AddFilterBlock();
        });

        $(document).on('click', '.search-panel .active-filters .filter i', (e) => {
            let data = $(e.currentTarget).parent().first().data('filter');
            window.Konesso.filter.filters = window.Konesso.filter.filters.filter(el => el.input != data);

            Object.keys(window.Konesso.filter.postBody).forEach(el => {
                if (window.Konesso.filter.postBody[el].includes('cena_')) {
                    window.Konesso.filter.postBody[el] = window.Konesso.filter.postBody[el].split("-").filter(em => em != data).join("");
                } else {
                    window.Konesso.filter.postBody[el] = window.Konesso.filter.postBody[el].filter(em => em != data);
                }

            })

            if ($(e.currentTarget).parent().prop('innerText').includes('Cena od')) {
                $('.input-min').val("");
            } else if ($(e.currentTarget).parent().prop('innerText').includes('Cena do')) {
                $('.input-max').val("");
            } else {
                $('.filter-panel .accesibility-filter .filtertrigger, .modal__window .accesibility-filter .filtertrigger').find(`[data-filter='${data}']`).prop('checked', false);
            }
            
            $(e.currentTarget).parent().remove();
            FilterHref();
        })

        $(document).on('input propertychange', '.price-filter input', _.debounce((e) => {
            let parent = $(e.currentTarget).parent();
            if ($(e.currentTarget).hasClass('input-min') || $(e.currentTarget).hasClass('range-min')) {
                window.Konesso.filter.filters = window.Konesso.filter.filters.filter(el => el.parent != 'cena_min');
                window.Konesso.filter.filters.push({parent: `cena_min`, input: $(e.currentTarget).val()});

                range = range.filter(el => el.parent != 'cena_min');
                range.push({parent: `cena_min`, input: $(e.currentTarget).val() ? $(e.currentTarget).val() : 0});
            } else if ($(e.currentTarget).hasClass('input-max') || $(e.currentTarget).hasClass('range-max')) {
                window.Konesso.filter.filters = window.Konesso.filter.filters.filter(el => el.parent != 'cena_max');
                window.Konesso.filter.filters.push({parent: `cena_max`, input: $(e.currentTarget).val() ? $(e.currentTarget).val() : 0});

                range = range.filter(el => el.parent != 'cena_max');
                range.push({parent: `cena_max`, input: $(e.currentTarget).val()});
            }

            Object.keys(window.Konesso.filter.postBody).forEach(el => {
                if (el.includes(parent.data('filtername'))) {
                    window.Konesso.filter.postBody[el] = [...range].map(el => `${el.parent}=${el.input}`).join("-");
                }
            });

            AddFilterBlock();
            FilterHref();
        }, 200));
    }

    SubFilterButtons() {
        let filterNames = $('.filter-modal .s-menu-panel-root').children().get().filter((el, i) => i != 0).map(el => $(el).find('a')[0].innerHTML);
        let filterIds = $('.filter-modal .s-menu-panel-root').children().get().filter((el, i) => i != 0).map(el => $(el).find('a').data('id'));
        let html = '';

        filterNames.forEach((el, i) => {
            html += `<button class="btn">${el}</button>`;
        })

        $('.search-panel .filter-buttons').append(html);

        $('.search-panel .filter-buttons .btn').each((i, el) => {
            $(el).data('hash', `s-menu-panel-${Math.ceil(99999 * Math.random())}`);

            $(el).on('click', (e) => {
                let target = $(e.currentTarget);

                window.history.pushState([], "menu-href", '#' + target.data('hash'));
            });
        });

        let buttons = $('.search-panel .filter-buttons').children().get().filter((el, i) => i != 0);
        
        buttons.forEach((el, i) => {
            $(el).on('click', (e) => {
                $('.search-panel .filter').click();
                $(`[data-id="${filterIds[i]}"]`).click();
            });
        });
    }

    AdditionalInfoButton() {
        new Modal($('.additional-info').html(), $('.search-panel .wrapper .info-additional').data('modal').slice($('.search-panel .wrapper .info-additional').data('modal').indexOf('-') + 1), 'additional-info-modal');
    }

    ClearFilters() {
        $(document).on('click', '.clear-filters', (e) => {
            e.preventDefault();
            $('.form-filter').each((i, el) => {
                e.preventDefault();
                el.reset();
            });
            window.Konesso.filter.filters = [];
            window.Konesso.filter.href = [];
            $('.panel-products .active-filters').html("");
            window.history.pushState("", "", "search.php");
        })
    }

    GenerateSearchCategories() {
        let json = window.JSONS.MainCategories;
        let html;
        json.forEach(el => {
            if (el.label == 'Infolinia' || el.label == 'Konesso') {
                return;
            }
            if (el.label == 'Kawa') {
                el.children.forEach(em => {
                    if (em.label == 'Promo' || em == 'undefined') {
                        return;
                    }
                    html += `<div class="block">`;
                                    if (!em.children) {
                                        html += `<a href="#"><b class="title">${em.label}</b></a>`;
                                    } else {
                                        html += `<b class="title">${em.label}</b>`;
                                    }
                                    html += `<ul>`;
                                        if (!em.children || em.children == 'undefined') {
                                            return;
                                        }
                                        em.children.forEach((es, i) => {
                                            if (i < 3) {
                                                html += `<li>
                                                            <i class="zwicon-chevron-right"></i>
                                                            <a href="#">${es.label}</a>
                                                        </li>`;
                                            } else if (i == em.children.length - 1) {
                                                html += `<li class="show">Pokaż więcej</li>`;
                                            } else {
                                                html += `<li class="cat-hidden hidden">
                                                            <i class="zwicon-chevron-right"></i>
                                                            <a href="#">${es.label}</a>
                                                        </li>`;
                                            }
                                            i += 1;
                                        });
                                        
                            html += `</ul>
                                </div>`;
                })
            }
        })
        html = html.replace('undefined', '');
        $('.search-panel .panel-categories').append(html);
    }

    GenerateFilterMobile(el, i) {
        $(`${el} .modal__window`).slidingMenu({
            className : "gn-menu",
            backLabel: 'Wróć',
            dataJSON: window.Konesso.settings.MainFilter
        })

        let html = $('.filter-modal .modal__window').html();
        $('.filter-modal .modal__window').html('<form method="get" class="filter-form"></form>');
        $('.modal__window .filter-form').append(html);
    }

    GenerateMobileModals() {
        new Modal('', $('.search-panel .filter-buttons .filter').data('modal').slice($('.search-panel .filter-buttons .filter').data('modal').indexOf('-') + 1), 'filter-modal main-filter-modal');
        this.GenerateFilterMobile($('.filter-buttons .filter').data('modal'));
    }
}